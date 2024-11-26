import {
  FilterLiveSearch,
  FilterList,
  FilterListItem,
} from "react-admin";
import { Card, CardContent } from "@mui/material";
import CategoryIcon from "@mui/icons-material/LocalOffer";

export const PosterFilterSidebar = () => (
  <Card sx={{ order: -1, mr: "8px", mt: "0px", width: 200 }}>
    <CardContent>
      <FilterLiveSearch sx={{order:-1,width:170,height:40}} />
      <FilterList label="Status" icon={<CategoryIcon />}>
        <FilterListItem label="Active" value={{ status:"Active"}} />
        <FilterListItem label="Inactive" value={{ status:"Inactive" }} />
      </FilterList>
      <FilterList label="Permission" icon={<CategoryIcon />}>
        <FilterListItem label="Read" value={{ Permission: "R" }} />
        <FilterListItem label="Write" value={{ Permission: "R-W" }} />
        <FilterListItem label="Delete" value={{ Permission: "R-W-D" }} />
      </FilterList>
    </CardContent>
  </Card>
);
