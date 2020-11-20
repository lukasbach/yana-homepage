const cxs = require('cxs')
const React = require('react')

exports.onRenderBody = ({ setHeadComponents }) => {
  const css = cxs.css()
  cxs.reset()
  setHeadComponents([
    <style
      id="cxs-ids"
      key="cxs-ids"
      dangerouslySetInnerHTML={{ __html: css }}
    />,
  ])
}