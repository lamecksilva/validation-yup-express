const express = require("express");
const yup = require("yup");

const app = express();

app.use(express.json());

const linkSchema = yup.object({
  body: yup.object({
    url: yup.string().url().required(),
    title: yup.string().min(8).max(32).required(),
    content: yup.string().min(8).max(255).required(),
    contact: yup.string().email().required(),
  }),
  params: yup.object({
    id: yup.number().required(),
  }),
});

const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    return next();
  } catch (err) {
    return res.status(500).json({ type: err.name, message: err.message });
  }
};

app.get("/", (req, res) => {
  return res.json({ message: "Validation with Yup 👊" });
});

app.post("/create/:id", validate(linkSchema), (req, res) => {
  return res.json({ body: req.body, id: req.params.id });
});

const start = (port) => {
  try {
    app.listen(port, () => {
      console.log(`Api running at: http://localhost:${port}`);
    });
  } catch (err) {
    console.error(err);
    process.exit();
  }
};
start(3333);