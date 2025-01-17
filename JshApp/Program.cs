using JshApp.Data;
using JshApp.Interfaces;
using JshApp.Services;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using MySqlConnector;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
//builder.Services.AddDbContext<MyDbContext>();
// builder.Services.AddTransient<SqlConnection>(conn => new SqlConnection(builder.Configuration.GetConnectionString("Default")));
builder.Services.AddControllers();
builder.Services.AddSingleton<IProductService>(new ProductService(builder.Configuration.GetConnectionString("AzureConnection")));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}


app.UseAuthorization();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{api}/{controller=Home}/{action=Index}/{id?}");


app.MapFallbackToFile("index.html");

app.Run();

