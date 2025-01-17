using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using System.Threading.Tasks;
using JshApp.Interfaces;
using JshApp.Models;

namespace JshApp.Services
{
    public class ProductService : IProductService
    {
        private readonly string _connectionString;

        public ProductService(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<IEnumerable<Product>> GetAllProductsAsync()
        {
            var products = new List<Product>();
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                var command = new SqlCommand("SELECT idProducto, marca, descripcion, precio FROM dbo.producto", connection);
                using var reader = await command.ExecuteReaderAsync();
                while (await reader.ReadAsync())
                {
                    var itemId = reader.GetValue(0).GetHashCode();
                    var itemName = reader.GetValue(1).ToString();
                    var itemDesc = reader.GetValue(2).ToString();
                    var ItemPrice = reader.GetValue(3).GetHashCode();
                    Product pr = new Product(itemId, itemName, itemDesc, ItemPrice);
                    products.Add(pr);
                }
            }
            return products;
        }

        public async Task<Product> GetProductByIdAsync(int id)
        {
            Product? product = null;
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                var command = new SqlCommand("SELECT * FROM dbo.producto WHERE idProducto = @Id", connection);
                command.Parameters.AddWithValue("@Id", id);
                using var reader = await command.ExecuteReaderAsync();
                if (await reader.ReadAsync())
                {
                    var itemId = reader.GetValue(0).GetHashCode();
                    var itemName = reader.GetValue(1).ToString();
                    var itemDesc = reader.GetValue(2).ToString();
                    var ItemPrice = reader.GetValue(3).GetHashCode();
                    product = new Product(itemId, itemName, itemDesc, ItemPrice);

                }
            }
            return product;
        }

        // public async Task AddProductAsync(Product product)
        // {
        //     using (var connection = new SqlConnection(_connectionString))
        //     {
        //         await connection.OpenAsync();
        //         var command = new SqlCommand("INSERT INTO dbo.producto (idProducto, marca, descripcion, precio) VALUES (@Id,@Brand, @Descrption, @Price)", connection);
        //         command.Parameters.AddWithValue("@Id", product.Id);
        //         command.Parameters.AddWithValue("@Brand", product.Name);
        //         command.Parameters.AddWithValue("@Descrption", product.Description);
        //         command.Parameters.AddWithValue("@Price", product.Price);
        //         await command.ExecuteNonQueryAsync();
        //     }
        // }

        public async Task UpdateProductAsync(Product product)
        {
            using var connection = new SqlConnection(_connectionString);
            await connection.OpenAsync();
            var command = new SqlCommand("UPDATE Products SET marca = @Brand, descripcion = @Descrption, precio = @Price WHERE Id = @Id", connection);
            command.Parameters.AddWithValue("@Id", product.Id);
            command.Parameters.AddWithValue("@Brand", product.Name);
            command.Parameters.AddWithValue("@Descrption", product.Description);
            command.Parameters.AddWithValue("@Price", product.Price);
            await command.ExecuteNonQueryAsync();
        }

        public async Task DeleteProductAsync(int id)
        {
            using var connection = new SqlConnection(_connectionString);
            await connection.OpenAsync();
            var command = new SqlCommand("DELETE FROM dbo.producto WHERE Id = @Id", connection);
            command.Parameters.AddWithValue("@Id", id);
            await command.ExecuteNonQueryAsync();
        }



    }
}
