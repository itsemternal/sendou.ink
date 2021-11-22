import { Routes as SolidAppRoutes, Route } from "solid-app-router";
import { lazy } from "solid-js";
import { MapPoolTab } from "./scenes/tournament/components/MapPoolTab";
import { TeamsTab } from "./scenes/tournament/components/TeamsTab";
import TournamentData from "./scenes/tournament/TournamentPage.data";

const TournamentsPage = lazy(
  () => import("./scenes/tournament/components/TournamentPage")
);

export function Routes() {
  return (
    <SolidAppRoutes>
      <Route
        path="/to/:organization/:tournament"
        element={<TournamentsPage />}
        // TODO: fix type error
        data={TournamentData as any}
      >
        <Route path="/map-pool" element={<MapPoolTab />} />
        <Route path="/bracket" element={() => <>bracket</>} />
        <Route path="/teams" element={<TeamsTab />} />
        <Route path="/streams" element={() => <>streams</>} />
        <Route path="/*all" element={() => <>overview</>} />
      </Route>
      <Route path="/links" element={() => <div>links page</div>} />
      <Route path="/" element={() => <>home!</>} />
      <Route path="/*all" element={() => <>Not found</>} />
    </SolidAppRoutes>
  );
}
