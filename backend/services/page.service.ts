export async function getHTMLBody(url: string): Promise<string> {
  const response: Response = await fetch(url);
  let rawHTML: string = await response.text();

  const startIndex: number = rawHTML.indexOf('<body');
  rawHTML = rawHTML.substring(startIndex);
  
  const endIndicator: string = '</body>'
  const endIndex: number = rawHTML.lastIndexOf(endIndicator);
  rawHTML = rawHTML.substring(0, endIndex + endIndicator.length);

  return rawHTML;
};


