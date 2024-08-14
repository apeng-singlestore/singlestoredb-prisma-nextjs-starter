import prisma from '../../../lib/prisma'

// POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content
export default async function handle(req, res) {
  const { title, content, authorEmail } = req.body

  try {
    // First, find the user by email
    const user = await prisma.user.findFirst({
      where: { email: authorEmail }
    })

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    // If user exists, create the post
    const result = await prisma.post.create({
      data: {
        title: title,
        content: content,
        author: { connect: { id: user.id } },
      },
    })

    res.json(result)
  } catch (error) {
    console.error('Error creating post:', error)
    res.status(500).json({ error: 'Error creating post' })
  }
}