import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { PlaidLinkOptions } from "react-plaid-link";
import { StyledString } from "next/dist/build/swc";

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const getLinkToken = async () => {
      // const data = await createLinkToken(user);
      //   setToken(data?.linkToken);
    };

    getLinkToken();
  }, []);

  const onSuccess = useCallback(
    async (public_token: StyledString) => {
      //   await exchangePublicToken({
      //     publicToken: public_token,
      //     user,
      //   });

      
    },
    [user]
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  return (
    <div>
      {variant === "primary" ? (
        <Button className="plaidlink-primary">Connect bank</Button>
      ) : variant === "ghost" ? (
        <Button>Connect bank</Button>
      ) : (
        <Button>Connect bank</Button>
      )}
    </div>
  );
};

export default PlaidLink;
