import { useState, useRef } from 'react';
import axiosInstance from '../../api/axiosInstance';
import { useCreateTemple, useUpdateTemple } from '@/features/temple';
import { toast } from 'react-toastify';
import { Upload, X, Save, Building2, FileText, ImageIcon } from '../../icons';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

const AdminTempleForm = ({ temple, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: temple?.name || '',
    city: temple?.city || '',
    state: temple?.state || '',
    address: temple?.address || '',
    description: temple?.description || '',
    history: temple?.history || '',
    architecture: temple?.architecture || '',
    deity: temple?.deity || '',
    openingTime: temple?.openingTime || '',
    closingTime: temple?.closingTime || '',
    dressCode: temple?.dressCode || '',
    categories: temple?.categories || [],
    facilities: temple?.facilities || [],
    nearbyAttractions: temple?.nearbyAttractions || [],
    featuredImage: temple?.featuredImage || '',
    galleryImages: temple?.galleryImages || [],
    isFeatured: temple?.isFeatured || false,
    isActive: temple?.isActive !== undefined ? temple?.isActive : true,
    coordinates: {
      lat: temple?.coordinates?.lat || '',
      lng: temple?.coordinates?.lng || ''
    }
  });

  const fileInputRef = useRef(null);
  const galleryInputRef = useRef(null);

  const createMutation = useCreateTemple();
  const updateMutation = useUpdateTemple();

  const handleUpload = async (e, type) => {
    const files = e.target.files;
    if (!files.length) return;
    
    const uploadData = new FormData();
    if (type === 'single') {
      uploadData.append('image', files[0]);
    } else {
      Array.from(files).forEach(f => uploadData.append('images', f));
    }

    setLoading(true);
    try {
      const url = type === 'single' ? '/upload' : '/upload/multiple';
      const { data } = await axiosInstance.post(url, uploadData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (type === 'single') {
        setFormData(prev => ({ ...prev, featuredImage: data.data }));
      } else {
        setFormData(prev => ({ ...prev, galleryImages: [...prev.galleryImages, ...data.data] }));
      }
      toast.success('Images uploaded successfully');
    } catch (err) {
      toast.error('Image upload failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (temple) {
      updateMutation.mutate({ id: temple._id, data: formData }, { onSuccess: onClose });
    } else {
      createMutation.mutate(formData, { onSuccess: onClose });
    }
  };

  const isMutating = createMutation.isLoading || updateMutation.isLoading || loading;

  return (
    <div className="card p-8">
      <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
        <h2 className="text-2xl font-serif font-bold text-darkbrown-900">
          {temple ? 'Edit Temple' : 'Create New Temple'}
        </h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <X className="text-gray-500 w-5 h-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Core Info */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Building2 className="mr-2 w-5 h-5 text-saffron-500"/> Core Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Temple Name *" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            <Input label="Primary Deity *" required value={formData.deity} onChange={e => setFormData({...formData, deity: e.target.value})} />
            <Input label="City *" required value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
            <Input label="State *" required value={formData.state} onChange={e => setFormData({...formData, state: e.target.value})} />
          </div>
        </section>

        {/* Long Text */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <FileText className="mr-2 w-5 h-5 text-saffron-500"/> Rich Content
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
              <textarea required rows="3" className="input" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">History & Heritage</label>
              <textarea rows="4" className="input" value={formData.history} onChange={e => setFormData({...formData, history: e.target.value})} />
            </div>
          </div>
        </section>

        {/* Media */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <ImageIcon className="mr-2 w-5 h-5 text-saffron-500"/> Media Gallery
          </h3>
          <div className="space-y-6 bg-gray-50 p-6 rounded-xl border border-dashed border-gray-300">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
              <div className="flex items-center gap-4">
                {formData.featuredImage && <img src={formData.featuredImage} alt="Featured" className="w-20 h-20 rounded-lg object-cover shadow-sm" />}
                <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click()}>
                  <Upload className="w-4 h-4 mr-2" /> {formData.featuredImage ? 'Replace Image' : 'Upload Image'}
                </Button>
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={(e) => handleUpload(e, 'single')} />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gallery Images</label>
              <div className="flex flex-wrap gap-4 mb-4">
                {formData.galleryImages.map((img, i) => (
                  <div key={i} className="relative group">
                    <img src={img} alt={`Gallery ${i}`} className="w-20 h-20 rounded-lg object-cover shadow-sm" />
                    <button type="button" onClick={() => setFormData({...formData, galleryImages: formData.galleryImages.filter((_, idx) => idx !== i)})} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
              <Button type="button" variant="outline" onClick={() => galleryInputRef.current?.click()}>
                <Upload className="w-4 h-4 mr-2" /> Upload Multiple
              </Button>
              <input type="file" ref={galleryInputRef} className="hidden" accept="image/*" multiple onChange={(e) => handleUpload(e, 'multiple')} />
            </div>
          </div>
        </section>

        {/* Save */}
        <div className="flex justify-end gap-4 border-t border-gray-100 pt-6">
          <Button type="button" variant="outline" onClick={onClose} className="px-6 border-transparent hover:bg-gray-100">
            Cancel
          </Button>
          <Button type="submit" isLoading={isMutating} className="px-8 bg-darkbrown-900 hover:bg-darkbrown-800">
            {!isMutating && <Save className="w-5 h-5 mr-2" />}
            Save Temple
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminTempleForm;
