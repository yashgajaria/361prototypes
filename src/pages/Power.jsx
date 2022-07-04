import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';


import React, { useState, useEffect } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Home.css";
import { LinkContainer } from "react-router-bootstrap";
import {useLocation} from "react-router-dom";


export default function Home() {



  return (
    <div className="Home">
      <p> POWERBI</p>
      <PowerBIEmbed
        embedConfig = {{
        type: 'report',   // Supported types: report, dashboard, tile, visual and qna
        id: 'undefined',
        // embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=f6bfd646-b718-44dc-a378-b73e6b528204\u0026groupId=be8908da-da25-452e-b220-163f52476cdd\u0026w=2\u0026config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJhbmd1bGFyT25seVJlcG9ydEVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWUsInNraXBab25lUGF0Y2giOnRydWV9fQ%3d%3d',
        embedUrl: 'https://playgroundbe-bck-1.azurewebsites.net/Reports/SampleReport',
        accessToken: undefined,
        tokenType: models.TokenType.Embed,
        settings: {
            panes: {
                filters: {
                    expanded: false,
                    visible: false
                }
            },
            background: models.BackgroundType.Transparent,
        }
        }}

        eventHandlers = { 
        new Map([
            ['loaded', function () {console.log('Report loaded');}],
            ['rendered', function () {console.log('Report rendered');}],
            ['error', function (event) {console.log(event.detail);}]
        ])
        }

        cssClassName = { "report-style-class" }

        getEmbeddedComponent = { (embeddedReport) => {
            window.report = embeddedReport;
        }}
        />
    </div>
  );
}
