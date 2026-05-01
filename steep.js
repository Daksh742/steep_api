export default function handler(req, res) {
    const { a, b } = req.query;

    // Example logic (replace with your Big-M logic)
    let result;

    if (!a || !b) {
        return res.status(400).json({ error: "Missing inputs" });
    }

    // simple demo calculation
    result = parseFloat(a) + parseFloat(b);

    res.status(200).json({
        input: { a, b },
        result: result
    });
}