import "./MyPostersSection.css";
import MyPoster from "./MyPoster";
import { useEffect, useId, useState } from "react";
import { poster } from "../../oaTypes";
import MyFolder from "./MyFolder";

interface MyPostersSectionProp {
  myPosters: Array<poster> | null;
  editPosterCallback: (arg0: string) => void;
}

function MyPostersSection(props: MyPostersSectionProp) {
  let [OldPosterEdited, SetOldPosterEdited] = useState<string>("");

  useEffect(() => {
    props.editPosterCallback(OldPosterEdited);
  }, [props, OldPosterEdited]);

  function editPosterCallbackHandler(title: string) {
    SetOldPosterEdited(title);
  }

  let unquie_id: string = useId();
  return (
    <div id="MyPostersDiv">
      <div id="InnerMyPostersDiv">
        <h2>My Posters</h2>
        <span className="FolderSpan">
          <MyFolder folderType="old" folderName="My Folder example" />
          <MyFolder folderType="old" folderName="Other Folder example" />
          <MyFolder folderType="new" folderName="Create a new folder" />
        </span>
        <span className="PosterSpan">
          {props.myPosters?.map((poster, index) => {
            return (
              <MyPoster
                name={poster.name}
                key={Math.random()}
                Id={unquie_id + index}
                data={poster.data}
                accessibilityRating={poster.accessibilityScore}
                editPosterCallback={editPosterCallbackHandler}
              />
            );
          })}
        </span>
      </div>
    </div>
  );
}

export default MyPostersSection;
