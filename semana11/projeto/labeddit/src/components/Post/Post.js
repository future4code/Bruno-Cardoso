import React, { useState } from "react";

import { Typography } from "@material-ui/core";
import CloudDownloadRoundedIcon from "@material-ui/icons/CloudDownloadRounded";
import CloudUploadRoundedIcon from "@material-ui/icons/CloudUploadRounded";
import { CloudUploadRounded } from "@material-ui/icons";
import { BoxIcons, Posts } from "./styles";

const Post = () => {
  const [posts, setPosts] = useState({
    nomeUsuario: "Usuário",
    textoPost: "TEXTO DO POST",
    quantidadeComentarios: 0,
  });
  return (
    <>
      <Posts>
        <Typography variant="h6">{posts.nomeUsuario}</Typography>
        <Typography variant="body1">{posts.textoPost}</Typography>
        <BoxIcons>
          <Typography variant="h6">{posts.quantidadeComentarios}</Typography>
          <CloudUploadRoundedIcon />
          <Typography variant="h6">{posts.quantidadeComentarios}</Typography>
          <CloudDownloadRoundedIcon />
        </BoxIcons>
      </Posts>
      <Posts>
        <Typography variant="h6">{posts.nomeUsuario}</Typography>
        <Typography variant="body1">{posts.textoPost}</Typography>
        <BoxIcons>
          <Typography variant="h6">{posts.quantidadeComentarios}</Typography>
          <CloudUploadRoundedIcon />
          <Typography variant="h6">{posts.quantidadeComentarios}</Typography>
          <CloudDownloadRoundedIcon />
        </BoxIcons>
      </Posts>
      <Posts>
        <Typography variant="h6">{posts.nomeUsuario}</Typography>
        <Typography variant="body1">{posts.textoPost}</Typography>
        <BoxIcons>
          <Typography variant="h6">{posts.quantidadeComentarios}</Typography>
          <CloudUploadRoundedIcon />
          <Typography variant="h6">{posts.quantidadeComentarios}</Typography>
          <CloudDownloadRoundedIcon />
        </BoxIcons>
      </Posts>
      <Posts>
        <Typography variant="h6">{posts.nomeUsuario}</Typography>
        <Typography variant="body1">{posts.textoPost}</Typography>
        <BoxIcons>
          <Typography variant="h6">{posts.quantidadeComentarios}</Typography>
          <CloudUploadRoundedIcon />
          <Typography variant="h6">{posts.quantidadeComentarios}</Typography>
          <CloudDownloadRoundedIcon />
        </BoxIcons>
      </Posts>
    </>
  );
};

export default Post;
