using Api.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using RestSharp;

namespace Api.Controllers
{
    [ApiController]
    [Route("Cotizacion")]
    public class CurrencyController : ControllerBase
    {
        private readonly string _apiKey;
        private readonly string _compareCurrencies;
        private readonly string _allCurrencies;
        public CurrencyController(IConfiguration config)
        {
            _apiKey = config.GetValue<string>("ApiKey");
            _compareCurrencies = config.GetValue<string>("CompareCurrenciesUrl");
            _allCurrencies = config.GetValue<string>("AllCurrenciesUrl");
        }

        /// <summary>
        /// Metodo get por default
        /// </summary>
        /// <returns></returns>
        [EnableCors("MyPolicyCORS")]
        [HttpGet]
        public string Get()
        {         
            return "Bienvenido a la api de conversión de divisas";
        }

        /// <summary>
        /// Retorna todas las cotizaciones desde una divisa en especifico
        /// </summary>
        /// <returns></returns>
        [EnableCors("MyPolicyCORS")]
        [HttpGet("{source}")]
        public CurrenciesResponseModel Get(string source)
        {
            RestClient restClient = new RestClient($"{_allCurrencies}{source}/json?key={_apiKey}");
            RestRequest request = new RestRequest(Method.GET);
            IRestResponse response = restClient.Execute(request);
            return JsonConvert.DeserializeObject<CurrenciesResponseModel>(response.Content);
        }

        /// <summary>
        /// Retorna la cotizacion entre dos divisas
        /// </summary>
        /// <param name="source"></param>
        /// <param name="target"></param>
        /// <param name="quality"></param>
        /// <returns></returns>
        [EnableCors("MyPolicyCORS")]
        [HttpGet("{source}/{target}/{quality}")]
        public CurrencyResponseModel Get(string source,string target, int quality)
        {
            RestClient restClient = new RestClient($"{_compareCurrencies}{source}/{target}/json?quantity={quality}&key={_apiKey}");
            RestRequest request = new RestRequest(Method.GET);
            IRestResponse response = restClient.Execute(request);
            return JsonConvert.DeserializeObject<CurrencyResponseModel>(response.Content);
        }
    }
}