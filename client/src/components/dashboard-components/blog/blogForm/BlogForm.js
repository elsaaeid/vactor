import React from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import Card from "../../../global-components/card/Card";
import "./BlogForm.scss";
import { useTranslation } from "react-i18next";



const BlogForm = ({
  blog,
  blogImage,
  imagePreview,
  description,
  setDescription,
  code,
  setCode,
  handleInputChange,
  handleImageChange,
  saveBlog,
}) => {
          // Translation
	const { t } = useTranslation();
  return (
    <div className="add-blog">
      <Card cardClass={"card"}>
        <form className="flex flex-col justify-center items-center" onSubmit={saveBlog}>
          <Card cardClass={"group"}>
            <label>{t("blog.blogImage")}</label>
            <code>
             {t("blog.supportedFormats")}
            </code>
            <input
              type="file"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />

            {imagePreview != null ? (
              <div className="image-preview">
                <img src={imagePreview} alt="blog" />
              </div>
            ) : (
              <p>{t("noImg")}</p>
            )}
          </Card>
          <input
            type="text"
            placeholder={t("blog.blogName")}
            name="name"
            value={blog?.name || ''}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder={t("blog.category")}
            name="category" 
            value={blog?.category}
            onChange={handleInputChange}
          />
          <label>{t("blog.description")}:</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            modules={BlogForm.modules}
            formats={BlogForm.formats}
            className="text-gray-500"
          />
          <textarea
            placeholder="Code Snippet"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          ></textarea>
          <div className="flex justify-center w-full mt-3">
            <button type="submit" className="btn w-1/2">
              {t("blog.saveBlog")}
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

BlogForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
BlogForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default BlogForm;
