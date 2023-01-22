export default function FormatPrice({ productPrice }) {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(productPrice);
}
