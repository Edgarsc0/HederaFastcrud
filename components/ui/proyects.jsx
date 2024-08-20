"use client";

import CardProyect from "./cardProyect";
import { useState, useEffect } from "react";
import EmptyProyects from "./emptyProyects";
import { getCookie } from "cookies-next";
import axios from "axios";

export default function ResponsiveGrid() {
  const [proyects, setProyects] = useState();

  useEffect(() => {
    const getProyects = async () => {
      const userId = getCookie("userid");
      const { data } = await axios.post("/api/fastcrud/user/getProyects", {
        userId,
      });
      setProyects(data.proyects);
    };
    getProyects();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 lg:grid-cols-3 ">
      {proyects ? (
        proyects.length != 0 ? (
          <>
            {proyects.map((proyect) => (
              <CardProyect proyectInfo={proyect} />
            ))}
          </>
        ) : (
          <EmptyProyects />
        )
      ) : null}
    </div>
  );
}
