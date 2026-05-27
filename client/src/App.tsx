import { Route, Router, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import Company from "./pages/Company";
import CompanyHistory from "./pages/CompanyHistory";
import CompanyOrganization from "./pages/CompanyOrganization";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ReferencesCSV from "./pages/ReferencesCSV";
import ReferencesDesign from "./pages/ReferencesDesign";
import ReferencesGMP from "./pages/ReferencesGMP";
import ServiceCSV from "./pages/ServiceCSV";
import ServiceDesign from "./pages/ServiceDesign";
import ServiceGMP from "./pages/ServiceGMP";

export default function App() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/company" component={Company} />
        <Route path="/company/history" component={CompanyHistory} />
        <Route path="/company/organization" component={CompanyOrganization} />

        <Route path="/services" component={ServiceDesign} />
        <Route path="/service-design" component={ServiceDesign} />
        <Route path="/service-gmp" component={ServiceGMP} />
        <Route path="/service-csv" component={ServiceCSV} />

        <Route path="/references" component={ReferencesDesign} />
        <Route path="/references-design" component={ReferencesDesign} />
        <Route path="/references-gmp" component={ReferencesGMP} />
        <Route path="/references-csv" component={ReferencesCSV} />

        <Route path="/history" component={CompanyHistory} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}