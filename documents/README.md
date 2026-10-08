# 🎨 Fluid Vector AR

<p align="center">
  <strong>An Advanced Vector Drawing Studio with Live Camera Stencil Tracing & Interactive 3D Augmented Reality</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Language-Kotlin%20100%25-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" alt="Kotlin 100%">
  <img src="https://img.shields.io/badge/UI-Jetpack%20Compose-4285F4?style=for-the-badge&logo=jetpackcompose&logoColor=white" alt="Jetpack Compose">
  <img src="https://img.shields.io/badge/AR-Google%20ARCore%20%2F%20SceneView-34A853?style=for-the-badge&logo=google&logoColor=white" alt="Google ARCore">
  <img src="https://img.shields.io/badge/Camera-CameraX-FBBC05?style=for-the-badge&logo=android&logoColor=white" alt="CameraX">
  <img src="https://img.shields.io/badge/Database-Room%20DB-EA4335?style=for-the-badge&logo=sqlite&logoColor=white" alt="Room DB">
  <img src="https://img.shields.io/badge/Auth-Firebase%20%26%20Google-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase Auth">
</p>

---

## 📌 Overview

**Fluid Vector AR** is a state-of-the-art Android application designed to bridge the gap between digital vector illustration, physical real-world tracing, and 3D spatial visualization. Built from the ground up using **Jetpack Compose** and modern Android architecture, the app provides a zero-lag, high-precision vector engine alongside camera-assisted tracing and **Google ARCore** spatial projection.

Whether you are a digital artist, illustrator, tattoo designer, mural painter, shoe customizer, or hobbyist drawing on a mobile device without a stylus, **Fluid Vector AR** equips you with professional-grade vector tools, layer management, and cutting-edge AR capabilities.

---

## 🌟 Key Features

### 1. 🗂️ Dashboard & Project Management
- **Custom Canvas Creation**: Create new projects with preset dimensions (**HD**, **HD Portrait**, **FHD**, **Square**, **A4**) or specify custom width and height in pixels.
- **Dynamic Dashboard**: Grid and row project views displaying project titles, creation/modified timestamps, canvas dimensions, and automatically rendered vector thumbnails.
- **Project Actions**: Easily rename, duplicate, export, or delete projects with instant local database updates.

### 2. 🖌️ Interactive Vector Canvas & Gestures
- **Infinite Canvas Navigation**: Full 2-finger pan, pinch-to-zoom (up to 5000% scale factor), and free canvas matrix transformation.
- **Gesture Controls**: Double-tap gesture to instantly reset zoom level and align canvas to center. Toggleable background grid lines and grid size customization.
- **Bezier Smooth Rendering**: Real-time quadratic and cubic Bezier curve interpolation (`Path.cubicTo`) ensuring silky-smooth vector strokes without jitter.
- **Undo / Redo System**: Full stack undo/redo operations for all drawing, erasing, layer modifications, and image imports.

### 3. 🎨 Advanced Brush Engine
- **Pen**: Smooth, solid vector line with precise stroke width and opacity control.
- **Pencil**: Textured pencil/charcoal brush with adjustable grain density, corner radius, segment length, and texture deviation.
- **Glow**: Neon glowing brush powered by dynamic Gaussian blur filters (`BlurMaskFilter`).
- **Eraser**: Path eraser with layer masking capabilities for non-destructive vector path removal.

### 4. 🌈 Interactive Color Selector
- **HSV / RGB Picker**: Full-featured color picker dialog with visual color wheel, HEX code manual input, and recent color swatches.
- **Custom Color Palettes**: Save custom color palettes per project or across the app session.
- **Opacity Controls**: Alpha slider for fine-grained stroke transparency settings.

### 5. 🖼️ Image Import & Reference Stencils
- **Import Media**: Import external photos or reference artwork from device storage directly into the active drawing layer.
- **Transformable Image Strokes**: Position, scale, and rotate imported images freely on the canvas as reference layers or artwork components.

### 6. 🥞 Multi-Layer Management System
- **Layer Controls**: Support for multiple independent vector drawing layers.
- **Layer Operations**: Add, delete, duplicate, reorder via drag-and-drop, toggle visibility, adjust layer opacity, and perform layer-wide panning.
- **Stroke Selection**: Select individual strokes per layer for focused editing or deletion.

### 7. 📸 Camera Stencil Mode (Real-World Surface Tracing)
- **Live Camera Overlay**: Renders live CameraX preview beneath the drawing vector stack at high framerates.
- **Opacity Blending**: Adjustable real-time slider blending live camera feed transparency with vector drawings for precise physical surface tracing (paper, walls, shoes, canvas).
- **Hardware Controls**: Dual camera switching (front/back), torch/flashlight toggle, and tap-to-focus metering.
- **Snapshot Capture**: Capture the combined stencil drawing and live camera view as high-resolution photo snapshots.

### 8. 🕶️ Interactive 3D AR Mode (The Killer USP)
- **Google ARCore & SceneView Integration**: Projects 2D vector artwork into real 3D physical space using phone camera sensors.
- **Full 3D Transformations**:
  - **3D Translation**: Move drawing in X, Y, and Z depth plane (-5m to -0.2m).
  - **3D Rotation**: Full 3-axis orientation control (**Pitch X**, **Yaw Y**, **Roll Z**).
  - **Pinch Scaling**: Scale 3D projected artwork in real-world space.
- **Opacity & Reset**: Adjust AR projection opacity and double-tap to reset orientation.
- **AR Snapshots**: Snap 3D AR projections merged with the physical environment.

### 9. 🎯 Virtual Reticle Pointer (USP for Finger Drawing Accessibility)
- **Non-Stylus Precision**: Solves the classic "fat-finger occlusion problem" where the user's finger covers the stroke being drawn.
- **Offset Reticle**: Displays a customizable crosshair/reticle target offset above the touch point, keeping the active stroke 100% visible while drawing.
- **Interactive Tuning Dialog**: Visual canvas preview with X-offset and Y-offset sliders (-150dp to +150dp) to tailor reticle position to hand size and drawing style.

### 10. 📁 Multi-Format Export Engine
- **Scalable Vector Graphics (SVG)**: Exports clean, standardized SVG XML files preserving layer structure, SVG filters (glow/pencil), layer masks for erasers, and embedded base64 image data.
- **PNG Export**: High-resolution PNG output with support for transparent or custom solid backgrounds.
- **JPEG Export**: High-quality JPEG exports with configurable background colors and quality settings.
- **Custom Export Resolution**: Flexible resolution selector with ratio preservation.

### 11. 🔐 Auth, Settings & System Features
- **Google Sign-In & Firebase Auth**: Secure authentication powered by Firebase Auth, Android Credential Manager API, and Google Identity.
- **Theme Options**: Dynamic System, Dark, and Light UI themes.
- **Settings & Help**: Profile management, user preference synchronization via DataStore, interactive onboarding tutorials, FAQs, and feedback submission forms.

---

## 🛠️ Technology Stack

| Layer / Domain | Technologies & Libraries Used |
| :--- | :--- |
| **Language** | Kotlin 100% (Kotlin 2.1+, Coroutines, StateFlow, Kotlinx Serialization) |
| **UI Framework** | Jetpack Compose, Material Design 3, Material Icons Extended |
| **Architecture** | Clean Architecture + MVVM with Repository Pattern, Hilt Dependency Injection |
| **3D & AR Space** | Google ARCore (`com.google.ar:core`), SceneView (`sceneview-compose`, `arsceneview`) |
| **Camera Hardware** | CameraX (`camera-core`, `camera-camera2`, `camera-lifecycle`, `camera-view`), Exif |
| **Database & Persistence** | Room DB (`room-runtime`, `room-ktx`, `room-compiler`), DataStore Preferences |
| **Auth & Identity** | Firebase Auth BOM, Android Credential Manager API, Google Identity API |
| **Vector Engine** | Custom Bezier Curve Interpolation, Custom SVG Exporter & Bitmap Exporter |
| **Image Loading** | Coil Compose (with Coil SVG decoder) |
| **Color Tools** | Skydoves ColorPicker Compose |

---

## 🏗️ Project Architecture

The project follows Clean Architecture and MVVM principles structured within a clean single-module package layout:

```text
com.example.fluidvectorar/
├── data/
│   ├── local/
│   │   ├── AppDatabase/          # Room Database definition
│   │   ├── dao/                 # ProjectEntityDao, LayerEntityDao
│   │   └── entity/              # ProjectEntity, LayerEntity
│   ├── repository/              # DrawingRepository, StorageRepository, UserPreferencesRepository
│   └── serializer/              # VectorPathSerializer (JSON vector paths)
│
├── di/                          # Hilt Modules (AuthModule, DBModule, UserPreferencesModule)
│
├── domain/
│   ├── model/                   # BrushStyle, LayerState, PointData, UserPreferences, etc.
│   └── repository/              # AuthRepository, AuthUser
│
├── helper/                      # SVGExporter, BitmapExporter, StorageManager, BezierSmoother
│
├── ui/
│   ├── auth/                    # Onboarding & Google Sign-In Screen
│   ├── home/                    # Project Dashboard, Creation Dialog, PageSize presets
│   ├── editor/                  # Vector Editor Studio
│   │   ├── ar/                  # AR Projection Screen & 3D Controls
│   │   ├── camera/              # CameraX Live Stencil Preview
│   │   ├── components/          # BrushBar, LayerPanel, ReticleDialog, ColorPicker, ExportDialog
│   │   ├── state/               # CanvasUIConfigState, CanvasGestureState, UndoRedoManager
│   │   ├── view/                # EditorScreen, FluidCanvas (Compose Canvas rendering)
│   │   └── viewmodel/           # EditorScreenViewModel
│   ├── exportscreen/            # Final File Export & Share View
│   ├── settings/                # App System Settings & User Profile
│   ├── account/                 # Account Management Screen
│   ├── tutorial/                # Feature Previews & Step-by-Step Guides
│   ├── faq/                     # Interactive Searchable FAQ Accordion
│   └── feedback/                # In-App User Feedback Form
│
├── AppRoutes.kt                 # Navigation Compose Routes (Type-safe)
└── MainActivity.kt              # Entry Activity & App Theme Container
```

---

## 🚀 Getting Started

### Prerequisites
- **Android Studio**: Ladybug (2024.2.1) or newer
- **JDK**: Version 17
- **Android SDK**: Compile SDK 35/37, Minimum SDK 24 (Android 7.0+)
- **Device Requirements**: Physical Android device with camera and **Google Play Services for AR (ARCore)** support for AR Projection features.

### Installation & Build

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/FluidVectorAR.git
   cd FluidVectorAR
   ```

2. **Configure Firebase**:
   - Register your application SHA-1 fingerprint in your Firebase Console.
   - Download `google-services.json` and place it in the `app/` directory.

3. **Open in Android Studio**:
   - Open the project in Android Studio.
   - Allow Gradle to sync dependencies.

4. **Run the Project**:
   - Connect an ARCore-compatible Android device via USB debugging.
   - Select the `:app` run configuration and click **Run** (or press `Shift + F10`).

---

## 📖 Usage Guide

1. **Create a Project**:
   - Open the app, sign in with Google or continue as guest.
   - Tap the **+ (New Project)** button on the dashboard.
   - Choose a preset size (e.g. *HD*, *Square*, *A4*) or enter custom dimensions.

2. **Draw on Canvas**:
   - Select brush tools (*Pen*, *Pencil*, *Glow*, *Eraser*) from the bottom bar.
   - Tap the color swatch to choose colors and adjust stroke width/opacity.
   - Pan and pinch-to-zoom freely across the infinite canvas.
   - Double-tap to reset canvas alignment.

3. **Enable Reticle Drawing**:
   - Open reticle settings to adjust the X and Y finger offset sliders.
   - Draw smoothly while viewing the crosshair target positioned above your finger.

4. **Camera Stencil Tracing**:
   - Toggle **Camera Mode** in the Editor.
   - Point your device camera at a surface (paper, wall, canvas).
   - Adjust stencil opacity slider and trace real-world surfaces.

5. **3D AR Projection**:
   - Switch to **AR Mode** in the Editor.
   - Project your drawing into 3D physical space.
   - Adjust 3D translation (depth), 3D rotation (Pitch/Yaw/Roll), and scale factor to place your artwork in your environment.

6. **Export Artwork**:
   - Tap **Export** in the top bar.
   - Choose format (**SVG**, **PNG**, **JPEG**), select background transparency/color, adjust resolution, and save or share.

---

## 🎯 Target Audience & Use Cases

- **Digital Artists & Illustrators**: Vector sketchpad with layer support and high-precision stroke smoothing.
- **Tattoo Artists**: Trace designs directly onto physical skin using Camera Stencil mode or view in 3D AR space.
- **Mural & Graffiti Painters**: Project small vector drawings onto large walls using 3D AR projection before painting.
- **Crafting & Shoe Customizers**: Align vector patterns over physical products for precision custom detailing.

---

## 📄 License

```text
Copyright 2026 Fluid Vector AR

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
