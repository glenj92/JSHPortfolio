using System;
namespace JshApp.Models
{
	public class Prueba
	{
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public int Price { get; set; }

        public Prueba(int id, string? name, string? description, int price)
        {
            Id = id;
            Name = name;
            Description = description;
            Price = price;
        }


    }
}

