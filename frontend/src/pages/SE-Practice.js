import React from "react";
import articles from "../dummydata/articles.js";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";

const SEPractice = () => {
    return (
      <div>
        <Dropdown/>
        <Styles>
          <Table
            data = {articles}
            columns = {tablecolumns}
          />
        </Styles>
      </div>
    );
}

export default SEPractice;