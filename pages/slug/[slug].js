const contentful = require("contentful");
import Figure from "react-bootstrap/Figure";
import 'bootstrap/dist/css/bootstrap.min.css';
const client = contentful.createClient({
  space: "exkv6i296cyi",

  accessToken: "L9YNTjHxmREE1-exmi2i_K19jQoKwA5YOEnWhbGMUIA",
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "product",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug},
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "product",
    "fields.slug": params.slug,
  });
  return {
    props: {
      product: items[0],
    },
  };
}

const car = ({product}) => {
     const { productName, productDes, productImage} = product.fields
  console.log(product.fields);

  return (
    <div style={{ margin: "2rem" }}>
      <Figure>
        <Figure.Image
          width={471}
          height={380}
          // alt="171x180"
             src={"http:"+productImage.fields.file.url}
        />
        <h3>{productName}</h3>
        <Figure.Caption>{productDes} </Figure.Caption>
      </Figure>
    </div>
  );
};

export default car;
