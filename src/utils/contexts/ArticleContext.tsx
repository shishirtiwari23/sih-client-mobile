import axios from "axios";
import React, { createContext, useState, ReactNode, useEffect } from "react";
import { IArticle, IArticleCard, IArticleContext } from "./interfaces";

const API_ARTICLE = axios.create({
  baseURL: `https://dsalgo.tech/article`,
});

const ArticleContext = createContext<IArticleContext>({
  articleLoading: true,
  articles: [],
  articlesOwn: [],
  getArticle: () => {},
  updateViewsByOne: () => {},
  likeArticle: () => {},
  saveArticle: () => {},
});

interface IArticleContextContextProvider {
  children: ReactNode;
}

export const ArticleContextProvider: React.FC<
  IArticleContextContextProvider
> = ({ children }) => {
  const [articles, setArticles] = useState<Array<IArticleCard>>([]);
  const [articlesOwn, setArticlesOwn] = useState<Array<IArticleCard>>([]);
  const [articleLoading, setArticleLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      const res = await API_ARTICLE.get("/rss");
      setArticles(res.data);
      // console.log({ res });
      setArticleLoading(false);
    }
    async function fetchArticlesOwn() {
      const res = await API_ARTICLE.get("/all");
      setArticlesOwn(res.data);
      // console.log({ res });
      setArticleLoading(false);
    }
    fetchArticles();
    fetchArticlesOwn();
  }, []);

  async function getArticle(id: string) {
    try {
      return await API_ARTICLE.get("/single", {
        params: { id },
      });
    } catch (error) {
      console.log("GET_ARTICLE", error);
    }
  }

  async function updateViewsByOne(id: string) {
    try {
      await API_ARTICLE.patch("/views", { id });
    } catch (error) {
      console.log("UPDATE_VIEWS_ARTICLE", error);
    }
  }

  async function likeArticle(id: string) {
    try {
      await API_ARTICLE.patch("/likes", {
        params: { id },
      });
    } catch (error) {}
  }

  async function saveArticle(id: string) {
    try {
      await API_ARTICLE.patch("/user-save", {
        parmas: { id },
      });
    } catch (error) {}
  }

  return (
    <ArticleContext.Provider
      value={{
        articleLoading,
        articles,
        getArticle,
        updateViewsByOne,
        likeArticle,
        saveArticle,
        articlesOwn,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleContext;
