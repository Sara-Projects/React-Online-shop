const currencyFormatter = new Intl.NumberFormat("en-AU", {
 currency: "AUD",
 style: "currency",
});
export default function FormatCurrency(number) {
 return currencyFormatter.format(number);
}
