// 1/2 - iniciar projeto
import express, { NextFunction, Request, Response } from "express";

const app = express();

// 3 - rota com POST
app.use(express.json());

function showPath(req: Request, res: Response, next: NextFunction) {
  console.log(req.path);
  next();
}

app.use(showPath);

app.get("/", (req, res) => {
  return res.send("Hello Express!");
});

// 3 - rota com POST
app.post("/api/product", (req, resp) => {
  console.log(req.body);

  return resp.send("Produto adicionado!");
});

// 4 - rota para todos os verbos
app.all("/api/product/check", (req, resp) => {
  console.log(req.body);

  if (req.method === "POST") {
    return resp.send("Inseriu algum registro");
  } else if (req.method === "GET") {
    return resp.send("Leu algum registro");
  } else {
    return resp.send("Não podermos realizar esta operação!");
  }
});

// 5 - interfaces do express
app.get("/api/interfaces", (req: Request, res: Response) => {
  return res.send("Utilizando as interfaces");
});

// 6 - enviando JSON
app.get("/api/json", (req: Request, res: Response) => {
  return res.json({
    name: "Simon",
    price: 30.0,
    color: "Blue",
    sizes: ["P", "M", "G"]
  });
});

// 7 - router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  if (id === "1") {
    const product = {
      name: "Simon",
      price: 30.0,
      color: "Blue",
      sizes: ["P", "M", "G"]
    };
    return res.json(product);
  } else {
    return res.send("Produto não encontrado!");
  }
});

// 8 - rotas complexas
app.get(
  "/api/product/:productId/review/:reviewId",
  (req: Request, res: Response) => {
    console.log(req.params);
    const { productId, reviewId } = req.params;
    return res.send(`Acessando a review ${reviewId} do produto ${productId}`);
  }
);

// 9 - router handle
function getUser(req: Request, res: Response) {
  console.log(`Resgatando o usuário com id: ${req.params.id}`);
  return res.send("O usuário foi encontrado!");
}

app.get("/api/user/:id", getUser);

// 10 - middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  if (id === "1") {
    console.log("Pode seguir");
    next();
  } else {
    console.log("Usuário não autorizado!");
    return res.sendStatus(401);
  }
}

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
  return res.json({ msg: "Bem-vindo a área administrativa!" });
});

// 12 - req res generics
app.get(
  "/api/user/:id/details/:name",
  (
    req: Request<{ id: string; name: string }>,
    res: Response<{ status: boolean }>
  ) => {
    const { id, name } = req.params;

    console.log(`ID: ${id}`);
    console.log(`Name: ${name}`);

    return res.json({ status: true });
  }
);

// 13 - tratando erros
app.get("/api/error", (req: Request, res: Response) => {
  try {
    throw new Error("Algo deu errado");
  } catch (e: any) {
    res.status(500).json({ msg: e.message });
  }
});

app.listen(3000, () => {
  console.log("Aplicação de TS + Express funcionando!");
});
