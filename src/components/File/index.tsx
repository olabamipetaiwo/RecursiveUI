import React, { CSSProperties, Fragment, useState } from "react";
import folderIcon from "assets/folder-icon.svg";
import fileIcon from "assets/file-icon.svg";
import CaretDown from "assets/caret-down.svg";
import CaretRight from "assets/caret-right.svg";
import { AppStyles } from "utils/styles";

interface FileProps {
  content: any;
  name: string;
  level: number;
}

const FileArray = ({ content, name, level }: FileProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const hasChildren = (data: any[]): boolean => {
    return data.length > 0 ? true : false;
  };

  return (
    <section style={AppStyles.column as CSSProperties}>
      <div>
        <div
          style={{
            ...AppStyles.fileItem,
            paddingLeft: `${level * 15}px`,
          }}
        >
          {hasChildren(content.__children) ? (
            <Fragment>
              <button style={AppStyles.btn} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <img src={CaretDown} alt="down" />
                ) : (
                  <img src={CaretRight} alt="right" />
                )}
              </button>

              <img src={folderIcon} alt="folder" />
            </Fragment>
          ) : (
            <img src={fileIcon} alt="file" />
          )}
          <p style={AppStyles.fileName}>{name}</p>
        </div>

        {isOpen &&
          hasChildren(content.__children) &&
          content.__children.map((item: any, i: number) => {
            let keys = Object.keys(item);
            const element = keys[0];
            const _level = level + 1;
            return (
              <FileArray
                key={`${element}${i}`}
                name={element}
                content={item[element]}
                level={_level}
              />
            );
          })}
      </div>

      <hr></hr>
    </section>
  );
};

export default FileArray;
