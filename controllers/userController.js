export default function login(req, res) {
  if (users.includes(req.body.username)) {
    res.status(200).send("Acesso autorizado!");
  } else {
    res.status(401).send("Acesso não autorizado!");
  }
}
