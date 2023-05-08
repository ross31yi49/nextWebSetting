// health check URL
const Health = () => null

// This gets called on every request
export async function getServerSideProps(context) {
  context.res.end('prog-web')
  return { props: {} }
}

export default Health
