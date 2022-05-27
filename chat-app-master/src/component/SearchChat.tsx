import { Button, Input } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";

export default function SearchChat(){

    return(<>
      <Input
            clearable
            contentRightStyling={false}
            placeholder="Search for Chat..."
            size="lg"
            fullWidth
            css={{padding:'$5'}}
            contentRight={
                <Button
                auto
                
                css={{borderTopLeftRadius:0, borderBottomLeftRadius:0}}
                color="error"
                icon={<FaSearch fill="currentColor" />}
              />
            }
          />
    </>)
}