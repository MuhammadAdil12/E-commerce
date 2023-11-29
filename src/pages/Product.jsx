import { useParams } from "react-router-dom";
import all_product from "../components/Assets/all_product";
import { Breadcrums } from "../components/Breadcrums/Breadcrum";
import { ProductDisplay } from "../components/ProductDisplay/ProductDisplay";
import { DescriptionBox } from "../components/DescriptionBox/DescriptionBox";
import { RelatedProducts } from "../components/RelatedProducts/RelatedProducts";


export const Product = () => {
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts/>
    </div>
  )
}
