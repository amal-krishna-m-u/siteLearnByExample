import React, { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy } from "react-icons/fi";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./CodeSnippet.css";

const CodeSnippet = ({ githubUrl, descriptionUrl, repoLink, fileLink }) => {
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cleanUrl = githubUrl.replace("/blob/", "/");
        const codeUrl = `https://raw.githubusercontent.com/${cleanUrl.replace(
          "https://github.com/",
          "",
        )}`;
        console.log(codeUrl);
        const codeResponse = await fetch(codeUrl);
        const codeText = await codeResponse.text();
        setCode(codeText);

        if (descriptionUrl) {
          descriptionUrl = descriptionUrl.replace("/blob/", "/");
          const descriptionResponse = await fetch(
            `https://raw.githubusercontent.com/${descriptionUrl.replace(
              "https://github.com/",
              "",
            )}`,
          );
          console.log(
            `https://raw.githubusercontent.com/${descriptionUrl.replace(
              "https://github.com/",
              "",
            )}`,
          );
          const descriptionText = await descriptionResponse.text();
          setDescription(descriptionText);
        }
        console.log("completed");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [githubUrl, descriptionUrl]);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div>
      <h2>Code from GitHub Repository:</h2>
      <div className="code-snippet-container">
        <div className="code-snippet">
          <SyntaxHighlighter
            language="javascript"
            style={dracula}
            customStyle={{
              padding: "20px",
              borderRadius: "8px",
              backgroundColor: "#1e1e3f",
            }}
          >
            {code}
          </SyntaxHighlighter>
          <CopyToClipboard text={code} onCopy={handleCopy}>
            <FiCopy className={`copy-icon ${copied ? "copied" : ""}`} />
          </CopyToClipboard>
        </div>
        <div className="description">
          <p>{description}</p>
          <h3>Links:</h3>
          <div className="links">
            <p>
              <a href={repoLink} target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </p>
            {fileLink && (
              <p>
                <a href={fileLink} target="_blank" rel="noopener noreferrer">
                  File on GitHub
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
      {copied && <p>Code copied to clipboard!</p>}
    </div>
  );
};

export default CodeSnippet;
