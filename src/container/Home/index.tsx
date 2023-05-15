import React, { CSSProperties, FormEvent, Fragment, useState } from "react";
import FileArray from "components/File";
import { AppStyles } from "utils/styles";
import { BASE_URL } from "utils/constants";
import { validateURL } from "utils/index";

import Error from "components/Error";
import Loader from "components/Loader";

const Homepage = () => {
  const [url, setUrl] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState(null);

  const fetchParsedHtml = async (url: string): Promise<void> => {
    setLoading(true);
    try {
      setError(null);
      const _url = `${BASE_URL}parsedhtml?url=${url}`;
      const response = await fetch(_url);
      const result = await response.json();
      setResponse(result.html.__children);
      setLoading(false);
    } catch (error) {
      setError("Error Occured");
      setLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUrl(event.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (url.length > 0 && validateURL(url)) {
      setResponse(null);
      fetchParsedHtml(url);
    } else {
      setError("Invalid URL, please check");
    }
  };

  const handleClear = () => {
    setResponse(null);
    setUrl("");
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <section style={AppStyles.container as CSSProperties}>
      <h1 style={AppStyles.head}>HTML Folder Structure</h1>
      {loading && <Loader />}
      {error && <Error error={error} handleError={clearError} />}
      {response && (
        <Fragment>
          <FileArray name="head" content={response[0].head} level={1} />
          <FileArray name="body" content={response[1].body} level={1} />
        </Fragment>
      )}

      <section style={AppStyles.inputContainer}>
        <form onSubmit={handleSubmit} method="post">
          <div style={AppStyles.center as CSSProperties}>
            <h2>Input</h2>
            <div style={AppStyles.inputGroup}>
              <textarea
                style={AppStyles.textbox as CSSProperties}
                name="url"
                id="url"
                value={url}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <div style={AppStyles.btnContainer}>
            <button
              type="button"
              onClick={() => handleClear()}
              disabled={loading}
              style={AppStyles.btnOutline}
            >
              Clear
            </button>
            <button
              disabled={loading || url.length < 1}
              type="submit"
              style={AppStyles.btnPrimary}
            >
              {loading ? "Fetching...." : "Submit"}
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Homepage;
