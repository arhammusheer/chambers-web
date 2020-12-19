

export default function VerificationListPage(props) {
  const { verificationList } = props;
  return (
    <div>
      <Grid container justify="center" spacing={1}>
        {verificationList.map((val, idx) => {
          return (
            <Grid key={`${obj.name} ${idx}`} item xs={12} sm={6} lg={4} xl={3}>
              <MemeCard
                path={obj.imgPath}
                title={obj.title}
                postID={obj.id}
              />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}