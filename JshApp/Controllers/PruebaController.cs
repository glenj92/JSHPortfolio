// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Net.NetworkInformation;
// using System.Threading.Tasks;
// using Google.Protobuf.WellKnownTypes;
// using JshApp.Models;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
// using MySqlConnector;
// using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

// // For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

// namespace JshApp.Controllers
// {
//     [ApiController]
//     [Route("[controller]")]
//     public class PruebaController : Controller
//     {

//         // GET: api/values
//         [HttpGet]

//         public async IAsyncEnumerable<IEnumerable<Prueba>> Get()
//         {
//             List<Prueba> allProducts = new List<Prueba> ();
//             using var connection = new MySqlConnection("Data Source=127.0.0.1;Database=DBjshglen;User Id=root;Password=12345678;SSL Mode=Required");
//             await connection.OpenAsync();
//             using var command = new MySqlCommand("SELECT ID, NAME, DESCRIPTION, PRICE FROM PRODUCTS;", connection);
//             using var reader = await command.ExecuteReaderAsync();

//             while (await reader.ReadAsync())
//             {
//                 var itemId = reader.GetValue(0).GetHashCode();
//                 var itemName = reader.GetValue(1).ToString();
//                 var itemDesc = reader.GetValue(2).ToString();
//                 var ItemPrice = reader.GetValue(3).GetHashCode();
//                 Prueba pr = new Prueba(itemId, itemName,itemDesc,ItemPrice);
//                 allProducts.Add(pr);
//                 Console.WriteLine("prueba 1");
//                 Console.Write("prueba 2");
//                 Console.Write(allProducts[0].Name);
//                // yield return allProducts;
//             }

//             Console.WriteLine(allProducts);



//             yield return allProducts;
//         }
//         //public async IAsyncEnumerable<string> Get()
//         //{
//         //    using var connection = new MySqlConnection("Data Source=127.0.0.1;Database=DBjshglen;User Id=root;Password=12345678;SSL Mode=Required");
//         //    await connection.OpenAsync();
//         //    using var command = new MySqlCommand("SELECT ID, NAME, DESCRIPTION, PRICE FROM PRODUCTS;", connection);
//         //    using var reader = await command.ExecuteReaderAsync();



//         //    while (await reader.ReadAsync())
//         //    {
//         //       var value = reader.GetValue(1);
//         //       yield return value.ToString();
//         //    }

//         //    yield return "This is my default action... ";

//         //}

//         // GET api/values/5
//         // [HttpGet("{id}")]
//         public string Welcome()
//         {
//             return "This is the Welcome action method...";
//         }

//     }
// }

