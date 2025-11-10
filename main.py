from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"mensaje": "¡Hola desde FastAPI en Comedor!"}

"solo es prueba para cambiar de rama y aver si funciona "