import './ChatBtn.css';
function ChatBtn({url='#'}) {
    return (
      <a href={url} target="_blank" className="btn-chat"> 
      <i class="gg-comment"></i>
  </a>
    );
}

export default ChatBtn;