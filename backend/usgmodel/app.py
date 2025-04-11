from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
import numpy as np
from PIL import Image
import io

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

from keras.models import load_model

model = load_model("pcos_model.keras")


CLASS_NAMES = ["infected", "notinfected"]

def preprocess_image(image_bytes):
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    image = image.resize((224, 224))  # Match your training size
    image_array = np.array(image) / 255.0
    return np.expand_dims(image_array, axis=0)

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    img = preprocess_image(contents)
    prediction = model.predict(img)[0][0]  # assuming single output sigmoid
    label = CLASS_NAMES[0] if prediction < 0.5 else CLASS_NAMES[1]
    confidence = 1 - prediction if label == CLASS_NAMES[0] else prediction
    return {"prediction": label, "confidence": float(confidence)}
