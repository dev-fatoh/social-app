import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { useContext } from "react";
import { authContext } from "../../contexts/authContext";

const PostHeader = ({ userId, avatar, user, date }) => {
  const { userData } = useContext(authContext);
  return (
    <>
      <div className="w-full h-16 flex items-center justify-between ">
        <div className="flex">
          <img
            className=" rounded-full w-10 h-10 mr-3"
            src={avatar}
            alt={user}
          />
          <div>
            <h3 className="text-md font-semibold "> {user}</h3>
            <p className="text-xs text-gray-500"> {date}</p>
          </div>
        </div>
        {userId == userData._id && (
          <Dropdown>
            <DropdownTrigger>
              <svg
                className="w-fit cursor-pointer rotate-90 outline-none"
                xmlns="http://www.w3.org/2000/svg"
                width={27}
                height={27}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b0b0b0"
                strokeWidth={2}
                strokeLinecap="square"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={1} />
                <circle cx={19} cy={12} r={1} />
                <circle cx={5} cy={12} r={1} />
              </svg>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="edit">Edit</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </div>
    </>
  );
};

export default PostHeader;
