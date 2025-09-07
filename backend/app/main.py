from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from .router_chat import router as chat_router

app = FastAPI(title="Lokesh Portfolio (Groq + RAG)")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], allow_credentials=True,
    allow_methods=["*"], allow_headers=["*"],
)

# API at /api/chat and /chat
app.include_router(chat_router, prefix="/api")
app.include_router(chat_router)

# Serve built frontend at root
app.mount("/", StaticFiles(directory="static", html=True), name="static")

# Optional: explicit health endpoint
@app.get("/healthz")
def health():
    return {"ok": True}
