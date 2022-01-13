import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    let response = { error: null, status: 200, data: { message: "Connection successful."} }
    return res.status(response.status).json(response);
}