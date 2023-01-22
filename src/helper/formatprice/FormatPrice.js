export default function FormatPrice({ productPrice }) {
  console.log("in sdsds priceprodet");
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(productPrice);
}
