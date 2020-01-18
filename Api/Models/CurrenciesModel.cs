
namespace Api.Models
{
    public class CurrenciesModel
    {
        public string From { get; set; }
        public ConversionModel[] Conversion { get; set; }
    }
}
