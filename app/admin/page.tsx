"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  PhotoIcon,
  VideoCameraIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

interface MediaItem {
  id: string;
  title: string;
  type: "image" | "video";
  category: string;
  description: string;
  url: string;
  thumbnail: string;
  createdAt: string;
}

// Mock data - en producción vendría de la base de datos
const mockMediaItems: MediaItem[] = [
  {
    id: "1",
    title: "Monitoreo Mina El Dorado",
    type: "video",
    category: "Minería",
    description: "Video de seguimiento mensual",
    url: "/videos/mina-eldorado.mp4",
    thumbnail: "/thumbnails/mina-eldorado.jpg",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Fumigación Cultivo Maíz",
    type: "video",
    category: "Agricultura",
    description: "Aplicación de pesticidas",
    url: "/videos/fumigacion-maiz.mp4",
    thumbnail: "/thumbnails/fumigacion-maiz.jpg",
    createdAt: "2024-01-10",
  },
];

export default function AdminPanel() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>(mockMediaItems);
  const [activeTab, setActiveTab] = useState<"media" | "carousel" | "settings">(
    "media"
  );
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadForm, setUploadForm] = useState({
    title: "",
    type: "image" as "image" | "video",
    category: "",
    description: "",
    file: null as File | null,
  });

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!uploadForm.file) {
      toast.error("Por favor selecciona un archivo");
      return;
    }

    // Aquí iría la lógica de upload real
    const newItem: MediaItem = {
      id: Date.now().toString(),
      title: uploadForm.title,
      type: uploadForm.type,
      category: uploadForm.category,
      description: uploadForm.description,
      url: URL.createObjectURL(uploadForm.file),
      thumbnail: URL.createObjectURL(uploadForm.file),
      createdAt: new Date().toISOString().split("T")[0],
    };

    setMediaItems([newItem, ...mediaItems]);
    setShowUploadModal(false);
    setUploadForm({
      title: "",
      type: "image",
      category: "",
      description: "",
      file: null,
    });

    toast.success("Archivo subido correctamente");
  };

  const handleDelete = (id: string) => {
    if (confirm("¿Estás seguro de eliminar este elemento?")) {
      setMediaItems(mediaItems.filter((item) => item.id !== id));
      toast.success("Elemento eliminado");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Panel de Administración
              </h1>
              <p className="text-gray-600">Global Drone</p>
            </div>
            <a href="/" className="btn-secondary">
              Ver Sitio Web
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: "media", name: "Multimedia", icon: PhotoIcon },
              { id: "carousel", name: "Carrusel", icon: VideoCameraIcon },
              { id: "settings", name: "Configuración", icon: PencilIcon },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === tab.id
                    ? "bg-drone-blue text-white"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Media Tab */}
        {activeTab === "media" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-900">
                  Gestión de Multimedia
                </h2>
                <button
                  onClick={() => setShowUploadModal(true)}
                  className="btn-primary flex items-center"
                >
                  <PlusIcon className="h-5 w-5 mr-2" />
                  Subir Archivo
                </button>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mediaItems.map((item) => (
                    <div
                      key={item.id}
                      className="border rounded-lg overflow-hidden"
                    >
                      <div className="aspect-video bg-gray-200 flex items-center justify-center">
                        {item.type === "video" ? (
                          <VideoCameraIcon className="h-12 w-12 text-gray-400" />
                        ) : (
                          <PhotoIcon className="h-12 w-12 text-gray-400" />
                        )}
                      </div>

                      <div className="p-4">
                        <h3 className="font-medium text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">
                          {item.category}
                        </p>
                        <p className="text-sm text-gray-600 mb-3">
                          {item.description}
                        </p>

                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-400">
                            {item.createdAt}
                          </span>
                          <div className="flex space-x-2">
                            <button className="p-1 text-gray-400 hover:text-blue-600">
                              <EyeIcon className="h-4 w-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-green-600">
                              <PencilIcon className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="p-1 text-gray-400 hover:text-red-600"
                            >
                              <TrashIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Carousel Tab */}
        {activeTab === "carousel" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Configuración del Carrusel
            </h2>
            <p className="text-gray-600">
              Aquí podrás configurar los elementos que aparecen en el carrusel
              principal de la página web.
            </p>
          </motion.div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Configuración General
            </h2>
            <p className="text-gray-600">
              Configuración general del sitio web y preferencias del sistema.
            </p>
          </motion.div>
        )}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-6 w-full max-w-md mx-4"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Subir Archivo
            </h3>

            <form onSubmit={handleUpload} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Título
                </label>
                <input
                  type="text"
                  value={uploadForm.title}
                  onChange={(e) =>
                    setUploadForm({ ...uploadForm, title: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-drone-blue focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo
                </label>
                <select
                  value={uploadForm.type}
                  onChange={(e) =>
                    setUploadForm({
                      ...uploadForm,
                      type: e.target.value as "image" | "video",
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-drone-blue focus:border-transparent"
                >
                  <option value="image">Imagen</option>
                  <option value="video">Video</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categoría
                </label>
                <select
                  value={uploadForm.category}
                  onChange={(e) =>
                    setUploadForm({ ...uploadForm, category: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-drone-blue focus:border-transparent"
                  required
                >
                  <option value="">Seleccionar categoría</option>
                  <option value="Minería">Minería</option>
                  <option value="Agricultura">Agricultura</option>
                  <option value="Construcción">Construcción</option>
                  <option value="Comercial">Comercial</option>
                  <option value="Infraestructura">Infraestructura</option>
                  <option value="Topografía">Topografía</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descripción
                </label>
                <textarea
                  value={uploadForm.description}
                  onChange={(e) =>
                    setUploadForm({
                      ...uploadForm,
                      description: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-drone-blue focus:border-transparent"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Archivo
                </label>
                <input
                  type="file"
                  accept={uploadForm.type === "video" ? "video/*" : "image/*"}
                  onChange={(e) =>
                    setUploadForm({
                      ...uploadForm,
                      file: e.target.files?.[0] || null,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-drone-blue focus:border-transparent"
                  required
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn-primary">
                  Subir
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
