import ProductTabs from "../../components/ProductTabs";

export default function ProductsPage() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "2rem", fontSize: "2rem" }}>
        قائمة الطعام
      </h1>
      <ProductTabs />
    </div>
  );
}
