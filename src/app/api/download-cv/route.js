export async function GET() {
  const cvUrl =
    'https://d3j8moiuywv8cf.cloudfront.net/fa4c6873-f8fd-4594-aed3-71f1e1ce0ce4'

  try {
    const response = await fetch(cvUrl, {
      headers: {
        Accept: 'application/pdf',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch CV: ${response.status}`) 
    }

    const blob = await response.blob()
    const arrayBuffer = await blob.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    return new Response(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Otgontuya_CV.pdf"',
        'Content-Length': buffer.length.toString(),
      },
    })
  } catch (error) {
    console.error('CV татаж авахад алдаа гарлаа:', error)
    return new Response(
      JSON.stringify({ error: 'CV татаж авахад алдаа гарлаа' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
}
