import "../styles/Loading.css"
const Loading = ({progress}) => {
  return (
    <section id='loading' className="layout-wrapper">
        <div className="loading-overlay">
            <div className="progress">
                {progress}%
            </div>
        </div>
    </section>
  )
}

export default Loading