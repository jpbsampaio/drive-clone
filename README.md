# 🚀 Drive Clone

A Google Drive clone built with Next.js 14, TypeScript, and Tailwind CSS.

![Version](https://img.shields.io/badge/version-0.1.0-green.svg)

## 📋 Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)
- [Contribution](#contribution)

## 🎯 Overview

Drive Clone is a web application that replicates the core functionalities of Google Drive, providing a secure and easy-to-use file storage system.

## 💻 Technologies

- Next.js 14
- TypeScript
- Tailwind CSS
- DrizzleORM
- SingleStore DB
- Clerk (Authentication)
- PostHog (Analytics)
- UploadThing (File Upload)

## ✨ Features

- ✅ User authentication
- ✅ File upload
- ✅ Folder management
- ✅ Responsive interface
- ✅ Integrated analytics
- ✅ File deletion
- ✅ Hierarchical navigation

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/drive-clone.git

# Navigate to the project directory
cd drive-clone

# Install dependencies
pnpm install

# Configure environment variables
cp .env.example .env

# Run database migrations
pnpm db:push

# Start the development server
pnpm dev
```

## 📁 Project Structure

```
drive-clone/
├── src/
│   ├── app/              # Routes and pages
│   ├── components/       # React components
│   ├── server/          # Server logic
│   └── styles/          # Global styles
├── public/              # Static files
└── ...
```

## 🚀 Future Improvements

1. **File Sharing**
   - Implement sharing system
   - Add permission controls

2. **File Preview**
   - Document preview
   - Image and video preview

3. **Advanced Search**
   - Search by metadata
   - Advanced filters

4. **Synchronization**
   - Desktop client
   - Offline synchronization

5. **Security**
   - End-to-end encryption
   - 2FA authentication

6. **Performance**
   - Implement caching
   - Optimize large file loading

7. **UI/UX**
   - Dark mode
   - Drag and drop
   - Mobile-optimized interface

## 🤝 Contribution

1. Fork the project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

Made with ❤️ by jpbsampaio

