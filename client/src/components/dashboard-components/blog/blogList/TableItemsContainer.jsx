import * as React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";
import { tokens } from "../../../../theme";
import DOMPurify from "dompurify";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import "./blogList.scss";
import { t } from 'i18next';


const columns = [
  { id: 'id', label: 'Id' },
  { id: 'name', label: 'Name' },
  {
    id: 'image',
    label: 'Image',
  },
  {
    id: 'category',
    label: 'Category',
  },
  {
    id: 'description',
    label: 'Description',
  },
  {
    id: 'action',
    label: 'Action',
  },
];



export default function TableItemsContainer({
  blogs, 
  pageCount, 
  handlePageClick, 
  currentItems, 
  shortenText, 
  confirmDelete
}) {
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);



  return (
    <Paper 
      style={{
        border: "1px solid var(--color-primary-variant)",
        backgroundColor: colors.grey[100],
      }} 
      sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer
      className="w-full"
      >
        <div 
        className="table w-full flex flex-center justify-center">
        {blogs.length === 0 ? (
          <p 
          className="w-full flex flex-center justify-center"
          style={{
            color: colors.grey[900],
          }}
          >{t("blog.noBlog")}</p>
        ) : (
          <table className='w-full overflow-x-scroll'>
            <thead>
              <tr>
              {columns.map((column) => (
                <th
                  style={{
                    color: colors.grey[900],
                  }}
                  key={column.id}
                >
                  {column.label}
                </th>
              ))}
              </tr>
            </thead>

            <tbody>
              {currentItems.map((blog, index) => {
                const { _id, name, image, description, category } = blog;
                return (
                  <tr key={_id}>
                    <td style={{
                      color: colors.grey[500],
                    }}>{index + 1}</td>
                    {name 
                      ? 
                      <td style={{
                        color: colors.grey[500],
                      }}>
                      {shortenText(name, 16)}</td>
                      : 
                      null}
                      {
                        image ? (
                        <td  style={{
                          color: colors.grey[500],
                        }}>
                          <img
                            src={image.filePath}
                            alt={image.fileName}
                          />
                        </td>
                      ) : 
                         null}
                         {
                            category
                            ?
                          <td style={{
                            color: colors.grey[500],
                          }}>
                            {category}
                            </td>
                            :
                            null
                          }
                          {
                            description
                            ?
                            <td align="right">
                              <div dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(description),
                              }}
                              ></div>
                            </td>
                            :
                            null
                          }

                          <td style={{
                            color: colors.grey[500],
                          }} className="icons">
                            <span>
                              <Link to={`/edit-blog/${_id}`}>
                                <FaEdit size={20} color={"green"} />
                              </Link>
                            </span>
                            <span>
                              <FaTrashAlt
                                size={20}
                                color={"red"}
                                onClick={() => confirmDelete(_id)}
                              />
                            </span>
                          </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        </div>
        <ReactPaginate
          className="pagination flex flex-row justify-around items-center"
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="Prev"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="activePage"
        />
      </TableContainer>
    </Paper>
  );
}