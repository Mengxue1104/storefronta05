// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  
  console.log("temp")
  if(req.method ==="POST"){
    console.log("Handle The Product")
    const productId = req.body.uid
    res.status(200).send( `all good to go now ${productId} `)
  }else{
    res.status(200).json({ name: 'jim foley' })
  }
}
