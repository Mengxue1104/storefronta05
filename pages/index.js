import Head from 'next/head'
import PageTitle from "../components/PageTitle/PageTitle";
import ProductCard from "../components/ProductCard/ProductCard";


// https://shoeshine8k-default-rtdb.firebaseio.com/products.json
/* 
          SSG Static Site Generation
          content
          data + comp ======> html+css-----------------> edge/CDN

*/
 
export default function Home(props) {

    const products = props.products;
   


     return(
          <>
          <Head>
          <meta charset="UTF-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
           <title>Storefront</title>
          </Head>
           <PageTitle tagline="product specials" title="Storefront"/>
           <main>
               {  products.map(product=> <ProductCard  key={product.uid} product={product}/>)}
           </main>
          </>
     )
}


/* 
   getStaticProps  =======>   server Node.js
*/

export async function getStaticProps(){
    // node.js code ... web apis filesystem read writes fetch
    // nextjs  five top level fetch api....
    const res = await fetch('https://shoeshine8k-default-rtdb.firebaseio.com/products.json')
    const productData = await res.json();
    const products = Object.values(productData)
 return {
      props:{
           products
      },
      revalidate:60
 }
}

 