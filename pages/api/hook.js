import { SIGNATURE_HEADER_NAME, isValidSignature } from "@sanity/webhook";

const handler = async(req, res) => {
  try {
    const signature = req.headers[SIGNATURE_HEADER_NAME].toString()
    if(!isValidSignature(
      JSON.stringify(req.body),
      signature,
      process.env.SANITY_WEBHOOK_SECRET
    )){
      return res.status(401).json({msg: 'Invalid request'})
    }
    await res.revalidate(`/`)
    res.status(200).json({msg: 'Revalidation successful'})
  } catch (error) {
    res.status(500).json({ error: error, mgs: 'Something went wrong'})
  }
}

export default handler