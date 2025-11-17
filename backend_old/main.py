from fastapi import FastAPI
from backend.routers import beneficiarios  # ← si usas `uvicorn backend.main:app`
from routers import beneficiarios

app = FastAPI()

app.include_router(beneficiarios.router)

@app.get("/")
def read_root():
    return {"mensaje": "¡Hola desde FastAPI en Comedor!"}

import uvicorn

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
