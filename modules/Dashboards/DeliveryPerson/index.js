import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import DeliveryZoneList from './DeliveryZoneList'
import { Grid } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  orderLg2: {
    [theme.breakpoints.up('lg')]: {
      order: 2,
    },
  },
  orderLg1: {
    [theme.breakpoints.up('lg')]: {
      order: 1,
    },
  },
}));

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Dashboard', link: '/dashboard' },
  { label: 'Delivery Person', isActive: true },
];

const CrmDashboard = () => {
  const classes = useStyles();
  return (
    <PageContainer heading="Delivery Person Management" breadcrumbs={breadcrumbs}>
      <GridContainer>
     <Grid item xs={12} >
          <DeliveryZoneList />
        </Grid> 
      </GridContainer>
    </PageContainer>
  );
};

export default CrmDashboard;